// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { SamplePage } from "./pages/SamplePage";
import { ProfilePage } from "./pages/ProfilePage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/* サンプルページ */}
        <Route path="/sample" element={<SamplePage />} />
        {/* プロフィールページ */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  }
};
