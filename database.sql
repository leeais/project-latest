CREATE TABLE IF NOT EXISTS faculties (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  avatar TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS departments (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  avatar TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS batches (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  start_year INTEGER NOT NULL,
  end_year INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS positions (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS instructors (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  avatar TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  avatar TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS account_status (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS accounts (
  id INTEGER PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  is_active BOOLEAN DEFAULT 1,
  instructor_id INTEGER,
  student_id INTEGER,
  account_status_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (instructor_id) REFERENCES instructors (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  FOREIGN KEY (account_status_id) REFERENCES account_status (id)
);

CREATE TABLE IF NOT EXISTS account_role (
  id INTEGER NOT NULL,
  account_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (account_id) REFERENCES accounts (id),
  FOREIGN KEY (role_id) REFERENCES roles (id),
  UNIQUE(account_id, role_id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id INTEGER NOT NULL,
  account_id INTEGER NOT NULL,
  refresh_token text NOT NULL,
  expires_in timestamp NOT NULL,
  ip_address varchar(50),
  user_agent text,
  is_active boolean DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS classes (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  faculty_id INTEGER NOT NULL,
  batch_id INTEGER NOT NULL,
  avatar TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (faculty_id) REFERENCES faculties (id),
  FOREIGN KEY (batch_id) REFERENCES batches (id)
);

CREATE TABLE IF NOT EXISTS class_students (
  id INTEGER PRIMARY KEY,
  class_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  FOREIGN KEY (position_id) REFERENCES positions (id),
  UNIQUE(class_id, student_id)
);

CREATE TABLE IF NOT EXISTS class_instructors (
  id INTEGER PRIMARY KEY,
  class_id INTEGER NOT NULL,
  instructor_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes (id),
  FOREIGN KEY (instructor_id) REFERENCES instructors (id),
  FOREIGN KEY (position_id) REFERENCES positions (id),
  UNIQUE(class_id, instructor_id)
);

CREATE TABLE IF NOT EXISTS department_instructors (
  id INTEGER PRIMARY KEY,
  department_id INTEGER NOT NULL,
  instructor_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments (id),
  FOREIGN KEY (instructor_id) REFERENCES instructors (id),
  FOREIGN KEY (position_id) REFERENCES positions (id)
);

CREATE TABLE IF NOT EXISTS request_status (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS payment_methods (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS payment_status (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS request_priorities (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS request_types (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  estimated_time INTEGER NOT NULL,
  department_id INTEGER NOT NULL,
  faculty_id INTEGER NOT NULL,
  fee NUMERIC(10, 2) DEFAULT 0.0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id),
  FOREIGN KEY (faculty_id) REFERENCES faculties(id)
);

CREATE TABLE IF NOT EXISTS requests (
  id INTEGER PRIMARY KEY,
  request_type_id INTEGER NOT NULL,
  account_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  priority_id INTEGER NOT NULL,
  note TEXT,
  payment_status_id INTEGER NOT NULL,
  payment_method_id INTEGER NOT NULL,
  request_status_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  completed_at TIMESTAMP,
  FOREIGN KEY (request_type_id) REFERENCES request_types(id),
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (priority_id) REFERENCES request_priorities(id),
  FOREIGN KEY (payment_status_id) REFERENCES payment_status(id),
  FOREIGN KEY (payment_method_id) REFERENCES payment_methods(id),
  FOREIGN KEY (request_status_id) REFERENCES request_status(id)
);

CREATE TABLE IF NOT EXISTS request_responses (
  id INTEGER PRIMARY KEY,
  request_id INTEGER NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (request_id) REFERENCES requests(id)
);

CREATE TABLE IF NOT EXISTS attachments (
  id INTEGER PRIMARY KEY,
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  size INTEGER NOT NULL,
  type TEXT NOT NULL,
  account_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS request_attachments (
  id INTEGER PRIMARY KEY,
  request_id INTEGER NOT NULL,
  attachment_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (request_id) REFERENCES requests(id),
  FOREIGN KEY (attachment_id) REFERENCES attachments(id)
);

CREATE TABLE IF NOT EXISTS response_attachments (
  id INTEGER PRIMARY KEY,
  response_id INTEGER NOT NULL,
  attachment_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (response_id) REFERENCES request_responses(id),
  FOREIGN KEY (attachment_id) REFERENCES attachments(id)
);
