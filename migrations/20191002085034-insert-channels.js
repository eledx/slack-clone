'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(`INSERT INTO channel (name, is_public) VALUES
    ('general', 'true'),
    ('random', 'true'),
    ('nailArtActivism', 'false'),
    ('exoskeletonDIY', 'false'),
    ('seaBassPhobia', 'false')
  `);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1,
};
