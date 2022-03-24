import axios from "axios";

export async function getData(setTutorialList) {
  await axios.get('https://experienced-rogue-avatar.glitch.me/api/tutorials')
    .then(res => {
      const tutorials = res.data;
      setTutorialList(tutorials);
    })
    .catch(err => {
      throw err;
    })
}

export async function deleteTutorial(currentId){
  await axios.delete(`https://experienced-rogue-avatar.glitch.me/api/tutorials/${currentId}`)
  .catch(err => {
    throw err;
  })
}