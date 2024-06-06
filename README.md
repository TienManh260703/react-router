# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- NOTE
  
1 :  Cách sử dụng components của React Router

  BrowserRouter: Để kết nối ứng dụng của bạn với URL của trình duyệt thì phải import BrowserRouter và bọc nó bên ngoài toàn bộ   ứng dụng chính là component App.

  Routes: Cung cấp các tuyến đường (routes) để điều hướng các thành phần của ứng dụng React. Dùng để bọc ở bên ngoài danh sách   các Route.

  Route: Được sử dụng để định nghĩa một route để điều hướng đến một component cụ thể.

  Link: Cho phép chuyển đổi giữa các URL khác nhau mà không cần phải load lại trang (nó tương tự như thẻ <a> trong HTML).

  Outlet: Nó dùng để xác định vị trí mà component trong route được hiển thị (Sử dụng giống {props.children} trong React).

  NavLink: Cũng giống Link, nhưng nếu URL trùng với link của NavLink thì sẽ thêm class là active.

  Navigate: Sử dụng Navigate để tự động chuyển hướng đến một trang nào đó.
  
2 : Nested Routes
  Để tạo ra các route con lồng nhau.
  
3 : Index routes

  Để hiển thị component ở route con ra ngoài route cha.
  
  Như ví dụ ở trên thì khi truy cập vào https://domain.com/blog sẽ load component Blog và không hiển thị conponent con nào cả.
  
  Điều chúng ta mong muốn là vẫn URL như vậy nhưng vẫn hiển thị một component con nào đó ở ngay component cha.
  
  Để làm được điều này ta sử dụng index và truyền component con muốn được hiển thị.
  
4 : Dynamic routes

  Dynamic routes giúp chúng ta tạo ra được các routes động.
  
5 : Hooks của React Router

useParams: Dùng để lấy được tham số trên param.

useNavigate: Dùng để điều hướng đến một đường dẫn khác, hoặc trở về các trang trước đó đã truy cập.

6 : Protected routes

  Giả sử ứng dụng của chúng ta có hai phần: public và private.
  
    Phần public thì ai cũng có thể truy cập được như trang chủ, trang blog…
    
    Phần private thì phải đăng nhập vào mới xem được như trang thông tin cá nhân,...
    
  Về hành vi đối với người dùng.
  
    Nếu đăng nhập rồi thì truy cập được tất cả các link của public hay private…
    
    Nếu chưa thì chỉ truy cập được các trang public, nếu người dùng vẫn cố truy cập vào các trang private thì ta điều hướng họ sang trang login.
    
7 : Route Objects

  Hook useRoutes dùng để xác định các tuyến đường dưới dạng object thuần javascript thay cho <Routes> và <Route>.

-- End



