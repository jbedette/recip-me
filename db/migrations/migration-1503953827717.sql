CREATE TABLE IF NOT EXISTS recipes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  ingredients TEXT,
  img VARCHAR(255),
  link VARCHAR(255)
);
