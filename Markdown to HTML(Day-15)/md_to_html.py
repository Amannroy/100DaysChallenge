import markdown as md

def convert_to_html(source, destination):
    try:
        with open(source, 'r', encoding='utf-8') as f:
            md_text = f.read()

        html_text = md.markdown(md_text)

        with open(destination, 'w', encoding='utf-8') as f:
            f.write(html_text)

        print("✅ HTML file created successfully!")

    except Exception as e:
        print("❌ Error:", e)

convert_to_html('sample.md', 'output.html')
