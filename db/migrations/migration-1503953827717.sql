CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  _date BIGINT
);
