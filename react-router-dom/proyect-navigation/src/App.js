import {HashRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from './HomePage';
import { BlogPage } from './BlogPage';
import {ProfilePage} from './ProfilePage';
import {Menu} from './Menu';
import {BlogPost} from './BlogPost';
import { Login } from './Login';
import { Logout } from './Logout';
import {AuthProvider} from './auth'
import {AuthRoute} from './auth'
function App() {
  return (
    <>
        <HashRouter>
            <AuthProvider>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<AuthRoute><Logout/> </AuthRoute>} />
                    <Route path="/profile" element={<AuthRoute><ProfilePage/> </AuthRoute>} />
                    <Route path="*" element={<p>Not Found</p>} />
                </Routes>
            </AuthProvider>
        </HashRouter>
    </>
  );
}

export default App;
