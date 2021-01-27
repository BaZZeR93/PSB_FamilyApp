function createUser(id, name, email, pass)
{
    return {
                "id": id,
                "name": name,
                "email": email,
                "pass": pass
            }
}

module.exports = createUser