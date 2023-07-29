// error.code
export const TEXT_MSG = {
  // firebase errors
  authUserNotFound: 'auth/user-not-found',
  authWrongPassword: 'auth/wrong-password',
  authMissingPassword: 'auth/missing-password',
  authInvalidEmail: 'auth/invalid-email',
  userDeleted: 'User deleted!',
  signOutSuccessful: 'Ви  вийшли з профілю адміністратора',
  passwordResetLinkSent: 'Password reset link sent!',
  // multer errors:
  partCount: 'Multer error: LIMIT_PART_COUNT',
  fileSize: 'Multer error: LIMIT_FILE_SIZE',
  fileCount: 'Multer error: LIMIT_FILE_COUNT',
  fieldKey: 'Multer error: LIMIT_FIELD_KEY',
  fieldValue: 'Multer error: LIMIT_FIELD_VALUE',
  fieldCount: 'Multer error: LIMIT_FIELD_COUNT',
  unexpectedFile: 'Multer error: LIMIT_UNEXPECTED_FILE',
  // vision
  cannotConvert: 'Cannot convert undefined or null to object',
  network: 'ERR_NETWORK',
};
