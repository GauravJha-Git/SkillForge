// Purpose:
// Password security.

// Responsibilities:

// Hash password

// Compare passwords

// Why utils?

// Reusable

// Testable

// Clean separation

import bcrypt from 'bcryptjs'; //bcrypt is a battle-tested password hashing algorithm

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

};
export const comparePasswords = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword); //compares the plain password with the hashed password after extracting salt 
};