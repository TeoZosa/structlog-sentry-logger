import sentry_sdk
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())
# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()
