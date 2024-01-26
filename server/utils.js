const crypto = require("crypto");
const {GraphQLError} = require("graphql/error");
const { periods, incidents, MINUTE } = require("./config");

/** переводит минуты в милисекунды */
const minutesToMs = (minutes) => minutes * MINUTE;

/** функция задержки */
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

/** объект с методами, кидающими ошибки */
const throwError = {
    unauthorized(message){
        throw new GraphQLError(message ?? "Unauthorized", {
            extensions: {
                code: "401",
            },
        });
    },
    notFound(message){
        throw new GraphQLError(message ?? "Not found", {
            extensions: {
                code: "404",
            },
        })
    }
}

/** проверяет хэдеры на валидность токена, кидает 401 если не валиден */
const checkHeaders = (headers, tokenKey, users, isREST) => {
    if (headers.authorization) {
        const token = headers.authorization.split(' ')[1];
        const tokenParts = token.split('.');
        const signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64');

        if (signature !== tokenParts[2] ||
            !Object.values(users).find(
                user => user.token === token && new Date().getTime() < new Date(user.expires).getTime()
            )
        ) {
           !isREST && throwError.unauthorized();
           return false;
        }

        return true;

    } else {
        !isREST && throwError.unauthorized();
        return false;
    }
}

/** отдаёт рандомное число, помноженное на multiplier и округлённое вверх */
const getRand = (multiplier) => Math.ceil(Math.random() * multiplier);

/** отдаёт случайное целое число */
const getRandId = () => Date.now() * Math.trunc(Math.random() * 10000);

/** отдаёт объект { [период]: количество инцидентов }  */
const getIncidentData = () =>
    periods.reduce((acc, item, index) => {
        return { ...acc, [item]: getRand(Math.pow(10, index + 1)) };
    }, {});

/** добавляет машине случайный id и набор инцидентов */
const createCarFunction = (input) => {
    const id = getRandId();
    const _incidents = incidents.reduce((acc, item) => {
        return { ...acc, [item]: getIncidentData() };
    }, {});

    return {
        id,
        incidents: _incidents,
        ...input,
    };
};

/** отдаёт случайное число в диапазоне между min и max */
const getRandIntBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** отдаёт случайный инцидент */
const getRandIncident = (cars) => {
    const id = getRandId();
    const car = cars[getRandIntBetween(0, cars.length - 1)];
    const incident = incidents[getRandIntBetween(0, incidents.length - 1)];

    return { id, car, incident };
};

module.exports = { minutesToMs, delay, throwError, checkHeaders, getRandId, createCarFunction, getRandIncident };