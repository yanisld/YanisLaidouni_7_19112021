const Role = require('../models/Role');

module.exports = async (req, res, next) => {
    try {
        await Role.sync();
        const query = await Role.findOne({ where: { id: 1 }, attributes: ['name'], raw: true });
        console.log(query);
        if (query == null) {
            next();
        }
        else if (query.name != 'participant') {
            Role.create()
                .then(() => res.status(201).json({ message: 'Rôle créé !' }))
                .catch(error => res.status(400).json({ error }));
            next();
        }
    }
    catch {
        res.status(401).json({ error: new Error('Erreur création du rôle') });
    }
};