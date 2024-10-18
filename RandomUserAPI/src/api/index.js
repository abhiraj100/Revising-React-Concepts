export const getRandomUser = async() => {
    const response = await fetch("https://randomuser.me/api/", {
        method : "GET"
    });
    const data = await response.json();
    return data;
}