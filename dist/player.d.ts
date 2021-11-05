declare class Player {
    username: string;
    uuid: string;
    constructor(username: string, uuid: string);
}
interface Players {
    [key: string]: Player;
}
export { Player, Players };
