CREATE TABLE IF NOT EXISTS recipes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  ingredients VARCHAR(255),
  _date BIGINT
);
