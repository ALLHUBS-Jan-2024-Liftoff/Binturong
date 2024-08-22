export const User = () => {
    let username = "";

    let getName = () => {
        return username;
    };

    let setName = (name) => {
        username = name ;
    };

    return {
        getName: getName,
        setName: setName
    }

}