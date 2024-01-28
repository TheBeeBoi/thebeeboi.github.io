#!/bin/bash

echo "Gay sex script starting up..."
sleep 0.5
echo "Done!"

# Function to truncate content to 50 words and add "..."
truncate_content() {
    echo "$1" | awk '{for(i=1;i<=50;i++)printf $i" "; print "..."}'
}

# Loop through all Markdown files in the current directory
for markdown_file in *.md; do
    if [ -f "$markdown_file" ]; then
        # Extract metadata from the Markdown file
        title=$(grep "^title:" "$markdown_file" | cut -d ":" -f 2 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
        date=$(grep "^date:" "$markdown_file" | cut -d ":" -f 2 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
        content=$(awk '/^---/ {if (++n == 2) exit; next} n' "$markdown_file")

        # Truncate content to 50 words
        truncated_content=$(truncate_content "$content")

        # Generate HTML post content
        post_html="<div class=\"post\">
    <p>$date</p>
    <a href=\"$markdown_file\"><h3>$title</h3></a>
    <p>$truncated_content</p>
</div>"

        html_file="index.html"

        # Check if the HTML file exists
        if [ -f "$html_file" ]; then
            # Find the line number where the "<h2>Posts</h2>" tag is located
            line_number=$(grep -n "<h2>Posts</h2>" "$html_file" | cut -d ":" -f 1)

            # Add the post HTML content after the line containing "<h2>Posts</h2>"
            sed -i "${line_number}a ${post_html}" "$html_file"

            echo "HTML content added for $markdown_file."
        else
            echo "HTML file not found."
        fi
    fi
done
