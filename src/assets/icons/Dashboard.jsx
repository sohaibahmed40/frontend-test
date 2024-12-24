const Dashboard = ({ active }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.3255 10.8738C24.3249 10.8732 24.3243 10.8727 24.3238 10.8721L14.1257 0.674438C13.6911 0.239563 13.1131 0 12.4984 0C11.8837 0 11.3057 0.239372 10.8709 0.674248L0.678172 10.8667C0.674739 10.8702 0.671305 10.8738 0.667872 10.8772C-0.224767 11.775 -0.223241 13.2317 0.672259 14.1272C1.08139 14.5365 1.62174 14.7736 2.19947 14.7984C2.22293 14.8006 2.24658 14.8018 2.27043 14.8018H2.67688V22.3066C2.67688 23.7917 3.88519 25 5.37063 25H9.36042C9.76478 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.6441 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6364 25H19.6262C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8893 14.5624 24.3243 14.1275C25.2208 13.2305 25.2212 11.7714 24.3255 10.8738Z"
        fill={active ? '#232323' : '#B1B1B1'}
      />
    </svg>
  );
};

export default Dashboard;
