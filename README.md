# List of methods available on sequelize-hierachy

createChild(values): Creates a new child entity and adds it to the hierarchy.
getChildren(options): Retrieves all the child entities for a given parent entity.
getChild(options): Retrieves a specific child entity for a given parent entity.
setParent(parent): Sets the parent of an entity to the specified parent entity.
getParent(): Retrieves the parent entity for a given child entity.
getRoot(): Retrieves the root entity for a given entity.
getDescendants(options): Retrieves all the descendant entities for a given parent entity.
getAncestors(options): Retrieves all the ancestor entities for a given child entity.
isDescendantOf(other): Checks whether an entity is a descendant of another entity.
isAncestorOf(other): Checks whether an entity is an ancestor of another entity.
getSiblings(options): Retrieves all the sibling entities for a given entity.
getPrevSiblings(options): Retrieves all the previous sibling entities for a given entity.
getNextSiblings(options): Retrieves all the next sibling entities for a given entity.
getLevel(): Retrieves the level of an entity in the hierarchy.
getHierarchy(options): Retrieves the entire hierarchy, starting from the root entity.
These methods allow you to perform various operations on the hierarchical data, such as creating new entities, retrieving parent and child entities, navigating the hierarchy, and more

# here's a list of the options available for some of the methods in Sequelize-hierarchy:

createChild(values): Takes an object values as input, where each key corresponds to an attribute of the child entity being created, and the value corresponds to the value for that attribute. For example: { name: 'New Child', description: 'This is a new child entity' }.

getChildren(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { name: 'Child 1' }, order: [['createdAt', 'DESC']] }.

getChild(options): Takes an object options as input, where the key where corresponds to an object that specifies the conditions for the child entity being retrieved. For example: { where: { name: 'Child 1' } }.

setParent(parent): Takes a parent entity as input, which will become the parent of the current entity.
getDescendants(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { name: { [Op.like]: '%child%' } }, order: [['createdAt', 'DESC']] }.

getAncestors(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { name: 'Root' } }.
getSiblings(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { name: { [Op.ne]: 'Child 1' } } }.

getPrevSiblings(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { createdAt: { [Op.lt]: new Date() } }, order: [['createdAt', 'DESC']] }.

getNextSiblings(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { createdAt: { [Op.gt]: new Date() } }, order: [['createdAt', 'ASC']] }.

getHierarchy(options): Takes an optional options object as input, which can include any Sequelize query options, such as where, attributes, order, limit, and more. For example: { where: { name: { [Op.like]: '%entity%' } }, order: [['level', 'ASC'], ['createdAt', 'DESC']] }.
