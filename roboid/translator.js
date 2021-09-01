const Translator = {
	_TEXTS: {
		'roboid.connection.singlemode': {
			en: "Single Robot Mode",
			ko: "단일 로봇 모드",
			ja: "単数のロボットモード",
			uz: "Yagona Robot Rejim"
		},
		'roboid.connection.multimode': {
			en: "Multiple Robots Mode",
			ko: "여러 로봇 모드",
			ja: "複数のロボットモード",
			uz: "Ko'p Robotlar Rejim"
		},
		'roboid.connection.notrunrobotcoding': {
			en: "Please run the Scratch 3 in the Robot Coding software\nand select \"Single Robot\" or \"Multiple Robots\".",
			ko: "로봇 코딩 소프트웨어에서 스크래치 3를 실행하고\n단일 로봇 또는 여러 로봇을 선택해 주세요.",
			ja: "ロボットコーディングソフトウェアでスクラッチ3を実行して、\n単数のロボットや単数のロボットを選んでください。",
			uz: "Robot Kodlash dasturidagi Scratch 3 ni ishga tushiring\nva \"Yagona Robot\" yoki \"Ko'p Robotlar\" ni tanlang."
		},
		'roboid.connection.connected': {
			en: "Connected.",
			ko: "연결되었습니다.",
			ja: "接続された。",
			uz: "Ulangan."
		},
		'roboid.connection.notconnected': {
			en: "Not connected.",
			ko: "연결되지 않았습니다.",
			ja: "接続されていません。",
			uz: "Ulanmagan."
		},
		'roboid.connection.notallconnected': {
			en: "There are robots not connected.",
			ko: "연결되지 않은 로봇이 있습니다.",
			ja: "接続されていないロボットがあります。",
			uz: "Ba'zi robotlar bog'liq emas."
		},
		'roboid.connection.notselected': {
			en: "It is not the selected robot.",
			ko: "선택된 로봇이 아닙니다.",
			ja: "選択されたロボットがありません。",
			uz: "Tanlangan robot emas."
		},
		'roboid.connection.norobot': {
			en: "No robots in use.",
			ko: "사용 중인 로봇이 없습니다.",
			ja: "使用中のロボットがありません。",
			uz: "Foydalanadigan robotlar yo'q."
		},
		'roboid.connection.connecting': {
			en: "Connecting.",
			ko: "연결 중입니다.",
			ja: "接続中です。",
			uz: "Ulamoqda."
		},
		'studio.help.title': {
			en: "Help",
			ko: "도움말",
			ja: "ヘルプ",
			uz: "Yordam"
		},
		'studio.help.hardware': {
			en: "Hardware Inquiry:",
			ko: "하드웨어 문의 :",
			ja: "ハードウェア問い合わせ:",
			uz: "Uskuna bo'yicha ma'lumot:"
		},
		'studio.help.software': {
			en: "Software Inquiry:",
			ko: "소프트웨어 문의 :",
			ja: "ソフトウェア問い合わせ:",
			uz: "Dasturiy bo'yicha ma'lumot:"
		},
		'studio.help.education': {
			en: "Educational Materials:",
			ko: "교육 자료 :",
			ja: "教育資料:",
			uz: "Ta'lim Materiallari:"
		},
		'studio.help.shop': {
			en: "How to Buy:",
			ko: "구입 방법 :",
			ja: "購入方法:",
			uz: "Qanday qilib sotib olinadi:"
		},
		'studio.help.repair': {
			en: "Repair Inquiry:",
			ko: "AS 문의 :",
			ja: "修理問い合わせ:",
			uz: "Ta'mirlashni ma'lumot:"
		},
		'studio.help.copyemail': {
			en: "Copy email address.",
			ko: "이메일 주소를 복사합니다.",
			ja: "メールアドレスをコピーします。",
			uz: "E-pochta manzilini nusxalash."
		},
		'studio.help.openurl': {
			en: "Display in web browser.",
			ko: "웹 브라우저에 표시합니다.",
			ja: "ウェブブラウザに表示します。",
			uz: "Veb-brauzerda ko'rsatish."
		},
		'studio.button.close': {
			en: "Close",
			ko: "닫기",
			ja: "閉じる",
			uz: "Yoping"
		},
		'studio.loader.loading1': {
			en: "Loading ",
			ko: "",
			ja: "",
			uz: ""
		},
		'studio.loader.loading2': {
			en: " model",
			ko: " 모델 불러오는 중",
			ja: "読み込み中",
			uz: " yuklanmoqda"
		},
		'tm-pose': {
			en: "teachable machine pose",
			ko: "티처블 머신 자세",
			ja: "ティーチャーブルマシン姿勢",
			uz: "Teachable machine pozlar"
		},
		'studio.error.loading': {
			en: "An error occurred while loading a model.",
			ko: "모델을 불러오는 중에 오류가 발생하였습니다.",
			ja: "モデルのロード中にエラーが発生しました。",
			uz: "Modelni yuklashda xatolik yuz berdi."
		},
		'studio.error.checkfiles': {
			en: "Please check the model files.",
			ko: "모델 파일을 확인하세요.",
			ja: "モデルファイルを確認してください。",
			uz: "Model faylini tekshiring."
		}
	},
	getTextForCurrentLang: function(id) {
		const values = Translator._TEXTS[id];
		if(values) {
			const val = values[document.documentElement.lang];
			if(val === undefined) return values['en'];
			return val;
		}
	}
};
