import json
from pathlib import Path
from app.main import app
from app.core.config import settings

OUTPUT_FILE = settings.OPENAPI_OUTPUT_FILE


def generate_openapi_schema(output_file):
    schema = app.openapi()
    output_path = Path(output_file)

    output_path.write_text(json.dumps(schema, indent=2))
    print(f"OpenAPI schema saved to {output_file}")


if __name__ == "__main__":
    generate_openapi_schema(OUTPUT_FILE)