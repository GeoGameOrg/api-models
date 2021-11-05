
class Player {
	username: string
	uuid: string

	constructor(username: string, uuid: string) {
		this.username = username
		this.uuid = uuid
	}
}

interface Players {
	[key: string]: Player
}

export { Player, Players }