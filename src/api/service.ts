import * as repo from "./repository";

async function getPoints() {
    return repo.getPointsDB();
}

async function setPoint(lieu: string) {

    if (!lieu.endsWith('-sur-le-bouc')) {
        throw new Error('syntaxe issue');
    }
    return repo.setPointDB(lieu);
}

export {getPoints, setPoint}