TODO list project
===

Application backend is running with the following API endpoints:

    GET - https://9q9a0h7a61.execute-api.us-west-1.amazonaws.com/dev/todos
    POST - https://9q9a0h7a61.execute-api.us-west-1.amazonaws.com/dev/todos
    PATCH - https://9q9a0h7a61.execute-api.us-west-1.amazonaws.com/dev/todos/{todoId}
    DELETE - https://9q9a0h7a61.execute-api.us-west-1.amazonaws.com/dev/todos/{todoId}
    POST - https://9q9a0h7a61.execute-api.us-west-1.amazonaws.com/dev/todos/{todoId}/attachment


Auth0 is working, with JWKS certificate retrieved dynamically (no secrets needed).

Locally-running frontend should be able to connect to the backend & add/remove/modify TODO items, including attachment image upload via S3. See screenshot of local app.

Logging and XRAY are working, see screenshots folder.
