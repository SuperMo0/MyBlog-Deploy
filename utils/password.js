import bcrypt from 'bcrypt';

export function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

export async function compare(providedPassword, targetPassword) {
    return await bcrypt.compare(providedPassword, targetPassword);
}
