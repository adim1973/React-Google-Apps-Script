// export namespace AnotherTestAccount {
//     export const getEmail = () => {
//         return Session.getActiveUser().getEmail();
//     };
// }

const getEmail = () => {
    return Session.getActiveUser().getEmail();
};

exports.getEmail = getEmail;
