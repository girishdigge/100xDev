import os
import sys
from dotenv import load_dotenv
from google import genai


def main():
    load_dotenv()
    verbose_flag = False
    api_key = os.environ.get("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    if len(sys.argv) < 2:
        print("i need prompt!")
        sys.exit(1)

    for arg in sys.argv:
        if arg == "--verbose":
            verbose_flag = True

    prompt = sys.argv[1]

    messages = [genai.types.Content(role="user", parts=[genai.types.Part(text=prompt)])]
    response = client.models.generate_content(
        model="gemini-2.0-flash-001",
        contents=messages,
    )

    print(response.text)

    if verbose_flag:
        print(f"user prompt:{prompt}")
        print(f"prompt tokens:{response.usage_metadata.prompt_token_count}")
        print(f"Response tokens:{response.usage_metadata.candidates_token_count}")


main()
