export type CategoriesProcedures = {
  id: number;
  name: string;
  description: string;
  estimated_time: number;
  department_id: number;
  faculty_id: number;
  fee: number;
  created_at: string;
  updated_at: string | null;
};

export const MODAL_CATEGORIES_PROCEDURES_NAME = 'modal-categories-procedures-name';

export const MOCK_CATEGORIES_PROCEDURES_TABLE: CategoriesProcedures[] = [
  {
    id: 1,
    name: 'Xin nghỉ 1 buổi',
    description: 'Giảng viên xin nghỉ 1 buổi học trong tuần',
    estimated_time: 24,
    department_id: 1,
    faculty_id: 1,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 2,
    name: 'Xin nghỉ nhiều buổi',
    description: 'Giảng viên xin nghỉ nhiều buổi liên tiếp',
    estimated_time: 48,
    department_id: 1,
    faculty_id: 1,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 3,
    name: 'Đề xuất dạy bù',
    description: 'Giảng viên đề xuất lịch dạy bù cho lớp',
    estimated_time: 12,
    department_id: 2,
    faculty_id: 1,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 4,
    name: 'Xin mượn phòng',
    description: 'Giảng viên xin mượn phòng để tổ chức sự kiện',
    estimated_time: 8,
    department_id: 3,
    faculty_id: 2,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 5,
    name: 'Xin cấp giấy xác nhận',
    description: 'Sinh viên xin cấp giấy xác nhận đang theo học',
    estimated_time: 24,
    department_id: 4,
    faculty_id: 2,
    fee: 50000.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 6,
    name: 'Xin bảng điểm tạm thời',
    description: 'Sinh viên xin bảng điểm tạm thời phục vụ hồ sơ',
    estimated_time: 48,
    department_id: 4,
    faculty_id: 2,
    fee: 20000.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 7,
    name: 'Xin xác nhận tốt nghiệp',
    description: 'Sinh viên xin xác nhận đã hoàn thành chương trình',
    estimated_time: 72,
    department_id: 5,
    faculty_id: 3,
    fee: 30000.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 8,
    name: 'Xin cấp thẻ sinh viên mới',
    description: 'Sinh viên xin cấp lại thẻ sinh viên do mất',
    estimated_time: 24,
    department_id: 4,
    faculty_id: 2,
    fee: 100000.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 9,
    name: 'Xin hỗ trợ học vụ',
    description: 'Sinh viên xin hỗ trợ về vấn đề học vụ hoặc môn học',
    estimated_time: 36,
    department_id: 4,
    faculty_id: 3,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
  {
    id: 10,
    name: 'Xin bảo lưu kết quả',
    description: 'Sinh viên xin bảo lưu kết quả học tập trong 1 kỳ',
    estimated_time: 72,
    department_id: 4,
    faculty_id: 3,
    fee: 0.0,
    created_at: '2025-09-13T09:00:00Z',
    updated_at: null,
  },
];
