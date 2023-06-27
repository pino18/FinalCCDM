from fastapi import APIRouter
from config.db import connection
from schemas.userDTO import userDTO
from schemas.postDTO import postDTO,postEntity
from schemas.profileDTO import profileDTO

main = APIRouter()

@main.get('/posts')
def getAllPosts():
    return postEntity(connection.quickq.PostDocument.find())

@main.get('/login/{user}/{password}')
def getUserLogged(user: str, password:str):
    params = {
        'username':user,
        'password':password
    }

    try:
        response = userDTO(connection.quickq.UserDocument.find_one(params))
        
        if response is not None:
            return(response)
            
    except TypeError:
        return("Error: No se encontró el documento.")
    
@main.get('/profile/{id}')
def getProfile(id: str):
    params = {
        'id':id,
    }

    try:
        response = profileDTO(connection.quickq.ProfileDocument.find_one(params))
        
        if response is not None:
            return(response)
            
    except TypeError:
        return("Error: No se encontró el documento.")
    
@main.get('/post/{name}')
def getProfile(name: str):
    params = {
        'createdBy':name,
    }
    try:
        response = postEntity(connection.quickq.PostDocument.find(params))
        print(params)
        if response is not None:
            return(response)
            
    except TypeError:
        return("Error: No se encontró el documento.")