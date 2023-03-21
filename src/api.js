export const getVans = async () => {
    // const res = await fetch("http://localhost:3000/api/vans")
    // if (!res.ok) {
    //     throw {
    //         message: "Failed to fetch vans", 
    //         statusText: res.statusText,
    //         status: res.status
    //     }
    // }
    // const data = await res.json()
    // return data.vans

    try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        return data.vans;
    } catch (err) {
        return err;
    }
}