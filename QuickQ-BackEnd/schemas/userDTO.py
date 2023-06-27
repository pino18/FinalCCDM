def userDTO (item) -> dict:
    return {
        "id":item["id"],
        "email":item["email"],
        "username":item["username"],
        "password":item["password"],
    }
