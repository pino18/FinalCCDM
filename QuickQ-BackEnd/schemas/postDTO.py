def postDTO(item) -> dict:
    return {
        "id":item["id"],
        "title":item["title"],
        "description":item["description"],
        "address":item["address"],
        "rate":item["rate"],
        "image":item["image"],
        "benefit":item["benefit"],
        "createdBy":item["createdBy"],
        "madeBy":item["madeBy"],
    }

def postEntity(posts) -> list:
    return [postDTO(item) for item in posts]