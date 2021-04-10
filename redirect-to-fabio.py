"""Send a reply from the proxy without sending any data to the remote server."""
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if flow.request.port == 8080:
        flow.request.port = 9999
        flow.request.host = "fabio"