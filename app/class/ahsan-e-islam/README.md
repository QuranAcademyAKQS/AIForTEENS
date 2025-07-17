# Ahsan e Islam - Interactive Islamic Framework

## Overview
This is an interactive course based on the comprehensive Islamic framework "تنظیم اسلامی میں احسان اسلام کے تقاضے" (Demands of Ehsan-e-Islam in Tanzeem-e-Islami). The course provides an interactive chart-based learning experience for understanding Islamic organizational principles and individual development goals.

## Features

### 🎯 Interactive Chart
- **Hierarchical Structure**: Four main pillars with expandable sub-categories
- **Clickable Elements**: Each box is interactive and provides detailed information
- **Visual Hierarchy**: Color-coded sections for easy navigation
- **Smooth Animations**: Framer Motion animations for engaging user experience

### 📊 Four Main Sections

#### 1. Main Framework (مرکزی فریم ورک)
- **Adherence to Sharia** (پابندی شریعت)
  - Worship / Rights of Allah (عبادات / حقوق الله)
  - Dealings / Rights of Servants (معاملات / حقوق العباد)
- **Ethics and Objectives** (اخلاقیات و اهداف)
  - Following the Messenger of Allah ﷺ
  - Rejection of False Ideologies
  - Spirit of "Religion is Sincerity"
- **Call to Religion / Da'wah** (دعوت دین)
  - Enjoining Good (امر بالمعروف)
  - Forbidding Evil (نهي عن المنكر)
- **Establishment of Religion** (اقامت دین)
  - Various aspects of religious establishment

#### 2. Daily Goals (روز مرہ کے اہداف)
- Quran Recitation and Understanding
- Tahajjud Observance
- Prescribed Supplications
- Recommended Remembrances

#### 3. Avoidance Goals (پر ہیز کے اہداف)
- Simplicity in Eating and Drinking
- Protection of the Tongue
- Avoidance of Laziness
- Protection of the Gaze

#### 4. Oversight System (نگرانی کا نظام)
- Self-Accountability System
- Personal Review System
- Request for Correction Letters

### 🔍 Search Functionality
- Search through all chart elements
- Supports both English and Urdu text
- Real-time filtering of results

### 📱 Responsive Design
- Mobile-friendly interface
- Adaptive layout for different screen sizes
- Touch-friendly interactions

### 🎨 Unique Theme
- Emerald and teal color scheme
- Islamic geometric patterns
- Professional and modern design
- Urdu font support with proper RTL text direction

## Technical Implementation

### Technologies Used
- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Framer Motion**: Smooth animations
- **Tailwind CSS**: Styling
- **Lucide React**: Icons

### Key Components
- `ChartBox`: Interactive chart element with expand/collapse
- `GoalCard`: Display card for goals and objectives
- Search functionality with real-time filtering
- Responsive navigation with section switching

### Data Structure
```typescript
interface ChartItem {
  id: string;
  title: string;
  urduTitle?: string;
  description?: string;
  children?: ChartItem[];
  color: string;
  icon?: React.ReactNode;
}
```

## Usage

1. **Navigate to the course**: Click on "Ahsan e Islam" from the main course list
2. **Explore the chart**: Click on any box to see details in the sidebar
3. **Search**: Use the search bar to find specific topics
4. **Switch sections**: Use the navigation tabs to explore different areas
5. **Expand/Collapse**: Click the chevron icons to expand or collapse sections

## Educational Value

This interactive course helps students:
- Understand the comprehensive framework of Islamic organization
- Learn about individual and collective responsibilities
- Explore daily practices and goals
- Understand the system of accountability and oversight
- Develop a deeper appreciation for Islamic organizational principles

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- High contrast color scheme
- Responsive text sizing
- Clear visual hierarchy

---

*This course is part of the QIB AI for TEENS educational platform, designed to provide Islamic education through modern, interactive technology.* 