import { calcYearMontDay } from '@/libs/calc';
import { Popover, Typography } from '@mui/material';
import { useState } from 'react';

const Aboutme = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [popoverText, setPopoverText] = useState<string>('');

    /**
     * 画像クリック時の処理
     * @param event
     */
    const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
        // エンジニアになってからの日付を計算
        const { year, month, day } = calcYearMontDay(new Date('2020-09-23'));
        setPopoverText(`エンジニアになってから${year}年${month}ヶ月${day}日が経過しました。`);
        setAnchorEl(event.currentTarget);
    };

    /**
     * ポップオーバーを閉じる
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="mb-40 pt-10" id="about_me">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">ABOUT ME</h2>
            <div className="sm:flex justify-center gap-4">
                <img
                    className="m-auto sm:m-0 block w-40 rounded-full"
                    src="/images/tukky.jpg"
                    alt="つっきーのアイコン画像"
                    onClick={handleImageClick}
                />
                <Popover
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>{popoverText}</Typography>
                </Popover>
                <p className="w-full sm:w-2/5 mt-4 sm:mt-0">
                    京都府の田舎出身で、現在は大阪に住んでいるITエンジニアの「つっきー」と申します。30歳でITエンジニア業界に転職しました。
                    主にAWSを使用したシステムの構築・運用や、フロントエンド・バックエンドを含むWebアプリケーションの開発などを行っています。{' '}
                </p>
            </div>
        </div>
    );
};

export default Aboutme;
