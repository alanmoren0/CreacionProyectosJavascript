const missionCommander=require('./../app/missionCommander')

describe('unit test para clase missionCommander',()=>{
	test('caso de prueba crear objeto de missionCommander',()=>{
		const myMissionCommander = new missionCommander("Woopa")
		expect(myMissionCommander.name).toBe('Woopa')
	})
	test('caso de prueba crear objeto de missionCommander y porvacar error',()=>{
		const myMissionCommander = new missionCommander("Woopa")
		expect(myMissionCommander.name).toBe('Woopi')
	})
})