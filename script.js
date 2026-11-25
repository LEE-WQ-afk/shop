// 顯示 Toast 提示框
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    
    // 2.5秒後自動消失
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// 點擊加入購物車時的動作
function addToCart(price) {
    // 儲存選擇的產品價格到 localStorage，以便購物車頁面讀取
    localStorage.setItem("selectedPrice", price);
    
    // 顯示提示
    let productName = price === 1200 ? "Vibe Watch Pro" : "AI 降噪耳機";
    showToast(`✅ 已將 ${productName} 加入購物車！`);
    
    // 可選：延遲 1 秒後自動跳轉到購物車頁面
    setTimeout(() => {
        window.location.href = "cart.html";
    }, 1500);
}