//action types 

import { 
  MUSIC,
  USERS,
  PHOTO,
  CONFIG,
  TODO,
  DIARY,
  SKIN
} from './actionsTypes'


export function newMusic (music) {
  console.log(music)
  return {
    type: MUSIC,
    music: music
  }
}

export function newUser (user) {
  return {
    type: USER,
    user: user
  }
}

export function newPhoto (photo) {
  return {
    type: PHOTO,
    photo: photo
  }
}

export function newConfig (config) {
  return {
    type: CONFIG,
    config: config
  }
}

export function newTodo (todo) {
  return {
    type: TODO,
    todo: todo
  }
}

export function newDiary (diary) {
  return {
    type: DIARY,
    diary: diary
  }
}
export function newSkin (skin) {
  return {
    type: SKIN,
    skin: skin
  }
}