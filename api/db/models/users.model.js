function createUser(id, name, email, pass, budget)
{
    return {
                "id": id,
                "name": name,
                "email": email,
                "pass": pass,
                "budget": budget
            }
}

module.exports = createUser