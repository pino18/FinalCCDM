def profileDTO(item) -> dict:
    return {
        "id":item["id"],
        "rate":item["rate"],
        "image":item["image"],
        "name":item["name"],
    }