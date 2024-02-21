export default async function getAllTournament(){
    const result  = await fetch('http://localhost:5000/tournament')

    return result.json();
}