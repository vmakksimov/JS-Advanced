class Company {
    constructor() {
        this.departaments = {}
    }

    addEmployee(name, salary, position, department) {
        new Array(name, salary, position, department).some(element => {
            if (element === null || element === undefined || element === '' || salary < 0) {
                throw new Error('Invalid input!')
            }
        })
        const newObj = {
            ['name']: name,
            ['salary']: salary,
            ['position']: position,
            
        }
        if (!this.departaments.hasOwnProperty(department)){
            this.departaments[department] = []
        }
        this.departaments[department].push(newObj)
            return `New employee is hired. Name: ${name}. Position: ${position}`

    }
    bestDepartment(){
        let highestAvgSalary = 0
        let bestTeam = {}
        let result = ''
        Object.entries(this.departaments).forEach(el => {
            let currentAverage = 0
            el[1].map(x => currentAverage += x.salary)
            if ((currentAverage / el[1].length) > highestAvgSalary){
                highestAvgSalary = currentAverage / el[1].length
                bestTeam[el[0]] = el[1]
                Object.values(bestTeam).forEach(person => {
                    person.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                })
            }
        })

        result += `Best Department is: ${Object.keys(bestTeam)}\n`
        result += `Average salary: ${Number(highestAvgSalary).toFixed(2)}\n`
        
        Object.values(bestTeam).forEach(team => {
            team.map(x => {
                result += `${x.name} ${x.salary} ${x.position}\n`
            })
        })
        return result.trim()
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());