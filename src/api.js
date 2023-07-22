import axios from 'axios';
import BASE_API_URL from './constant';
const vid = sessionStorage.getItem('fid');
const responseHandle = (res) => {
    if (res.status == 200 || res.status == 400) {
        return res.json();
    } else if (res.status == 500 || res.status == 400) {
        res.json.then(console.err);
        return;
    } else if (res.status == 403) {
        sessionStorage.clear();
        window.location.reload(false);
    }
}
const getPersonalIndivisualDetails = () => {
    const token = sessionStorage.getItem('token');

    return fetch(`https://naksa.org/api/v1/all-vendor/${vid}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

const getVendor = () => {
    const token = sessionStorage.getItem('token');

    return fetch(`http://vendor.helpforyou.in/api/v1/bank_upadate/`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
// const UpsertgetPersonalDetails = (data) => {
//     const token = sessionStorage.getItem('token');

//     return fetch(`https://naksa.org/api/v1/vendorpsll`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const getSinglePersonalDetails = (id) => {
    const token = sessionStorage.getItem('token');

    return fetch(`http://vendor.helpforyou.in/api/v1/bank_upadate/${id}/`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            // body: JSON.stringify(data)
        }).then(responseHandle);
}
const getSinglePersonalsDetails = (id) => {
    const token = sessionStorage.getItem('token');

    return fetch(`https://naksa.org/api/v1/vendorpsldtl/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            // body: JSON.stringify(data)
        }).then(responseHandle);
}

const getBankDetail = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;

    return fetch(`https://naksa.org/api/v1/vendordoc/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

const UpsertBankDetails = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/vendordoc`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}


const UpsertCallSupport = (data, id) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/naksa-support/${id}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}
const InsertAvailability = (data) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorablty`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data),
        }).then(responseHandle);
}
const getEducationalDetails = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendoreducation/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}


const getOtherDetails = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorother/${id}`,

        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const UpsertOtherDetails = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/vendorother`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}
const getOfficalsDetails = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorofficial/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const UpsertOfficalsDetails = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/vendorofficial`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}

// const UpsertgetCustomerDetails = (data) => {
//     const token = sessionStorage.getItem('token');

//     return fetch(`https://naksa.org/api/v1/vendorpsldtl`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }

const UpsertEducationalDetails = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/vendoreducation`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}

const getVendorExperience = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorexperience/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

const UpsertVendorExperience = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`https://naksa.org/api/v1/vendorexp`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}

const getFrenchiser = () => {
    const token = sessionStorage.getItem('token');
    return fetch(`http://vendor.helpforyou.in/api/v1/f_bank_upadate/${vid}/`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}






// const UpsertgetCustomerDetails = (data) => {
//     const token = sessionStorage.getItem('token');

//     return fetch(`http://vendor.helpforyou.in/api/v1/f_bank_upadate/`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const getVendorCompletedOrder = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`http://vendor.helpforyou.in/api/v1/vender_order_get/${id}/`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const getVendorPricing = () => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorofficial/${vid}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const getVendorOtherDetails = () => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/vendorother/${vid}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const getNewOrder = () => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`https://naksa.org/api/v1/get-order/${vid}/1`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
const LoginVendor = (data) => {
    return fetch('https://naksa.org/api/v1/accept-order/1/10', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(responseHandle)
}
const VendorPhoneReg = (phone) => {
    debugger;
    console.log(phone)
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendorReg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(phone)
    }).then(responseHandle)
}
const VendorPhoneVerify = (otp, phone) => {
    return fetch('https://naksa.org/api/v1/vendor-verify_otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, phone }),
    }).then(responseHandle)
}
const VendorPSLDTL = (body) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendorpsldtl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const VendorEDDetails = (body) => {
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendoreducation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)

}
const VendorOFCDTL = (body) => {
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendorofcdtl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const VendorOtherDTL = (body) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendorotherdtl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const VendorDocDTL = (body) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendordoc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const VendorExpDTL = (body) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('https://naksa.org/api/v1/vendorexp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const VendorProfileUpload = (body, phone) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch(BASE_API_URL + `/vendor-pic/${phone}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const VendorLogin = (phone, password) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('http://vendor.helpforyou.in/api/Account/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ phone, password })
    }).then(responseHandle)
}

const VendorRegister = (body) => {
    debugger;
    const token = sessionStorage.getItem('token');
    return fetch('http://vendor.helpforyou.in/api/Account/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const BasicDetail = (body) => {
   
    const token = sessionStorage.getItem('token');
    return fetch('http://vendor.helpforyou.in/api/v1/f_basic_upadate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const BankDetail = (body) => {
   
    const token = sessionStorage.getItem('token');
    return fetch('http://vendor.helpforyou.in/api/v1/f_bank_upadate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}









const ProfileUploader = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/vendor-pic/phone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const StartLiveStramingApi = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/start-live-streaming', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const FaqTypePost = (faqtypename) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/faqtype', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
        body: JSON.stringify(faqtypename)
    }).then(responseHandle)

}


const GetFAQType = () => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/faqtype', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}
const DeleteFAQ = (id) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/faqtype/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}

const GetFAQName = (id) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/faq/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}
const FaqNamePost = (faqtypename) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/faq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
        body: JSON.stringify(faqtypename)
    }).then(responseHandle)

}
const DeleteFAQname = (id) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/faq/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}



const GetFAQ = (id) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/faq/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}
const FaqPost = (faqname, faqdisc) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/faq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
        body: JSON.stringify(faqname, faqdisc)
    }).then(responseHandle)

}
const DeleteFaq = (id) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/faq/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)

}

const Getbanner = () => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/banner`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)
}
const GetExpertPortfolio = () => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/expert_portfolio`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)
}
const UpsertExpertPortfolio = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/expert-portfolio`, {
        method: 'POST',
        headers: {
            'Authentication': 'Bearer' + token
        },
        body: body
    }).then(responseHandle)
}
const GetRechargePlan = () => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/recharge`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)
}
const UpsrtRechargePlan = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/recharge`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

const GetGiftPlan = () => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/gift`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' + token
        },
    }).then(responseHandle)
}
const UpsrtGiftPlan = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch(`https://naksa.org/api/v1/gift_plan`, {
        method: 'POST',
        headers: {
            'Authentication': 'Bearer' + token
        },
        body: body
    }).then(responseHandle)
}
const UPSRTBanner = (body) => {
    const token = sessionStorage.getItem('token')
    return fetch('https://naksa.org/api/v1/banner', {
        method: 'POST',
        headers: {
            'Authentication': 'Bearer' + token
        },
        body: body
    }).then(responseHandle)

}

// const UpsertGetOrder = (data) => {
//     const token = sessionStorage.getItem('token');
//     return fetch(`https://naksa.org/api/v1/get-order-customer/`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const getCustomerOrder = (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;

    return fetch(`https://naksa.org/api/v1/get-order-customer/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

const getWalletAmount = () => {
    const token = sessionStorage.getItem('token');
    // debugger;
    return fetch(`http://vendor.helpforyou.in/api/v1/vender_wallet/${vid}/
    `,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}
// const UpsertWalletAmount = (data) => {
//     const token = sessionStorage.getItem('token');
//     return fetch(`https://naksa.org/api/v1/wallet-amount/`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const getRequestMoney = () => {
    const token = sessionStorage.getItem('token');
    return fetch(`http://vendor.helpforyou.in/api/v1/franchaiser_request_money/${vid}/`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

const postRequestMoney = (data) => {
    const token = sessionStorage.getItem('token');
    return fetch(`http://vendor.helpforyou.in/api/v1/franchaiser_request_money/francheiser_money_request/`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(data)
        }).then(responseHandle);
}



// const UpsertPaymentLogs  = (data) => {
//     const token = sessionStorage.getItem('token');
//     return fetch(`https://naksa.org/api/v1/payment-logs/1`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }

 //const  UpsertCallSupport  = (data) => {
//     const token = sessionStorage.getItem('token');
//     return fetch(`https://naksa.org/api/v1/naksa-support/call`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const  getCallSupport= (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;

    return fetch(`https://naksa.org/api/v1/naksa-support/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}

// const  UpsertChatSupport  = (data) => {
//     const token = sessionStorage.getItem('token');
//     return fetch(`https://naksa.org/api/v1/naksa-support/chat`,
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': 'Bearer' + token
//             },
//             body: JSON.stringify(data)
//         }).then(responseHandle);
// }
const  getChatSupport= (id) => {
    const token = sessionStorage.getItem('token');
    // debugger;

    return fetch(`https://naksa.org/api/v1/naksa-support/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        }).then(responseHandle);
}















export {
    getPersonalIndivisualDetails,
    // UpsertgetCustomerDetails,
    getWalletAmount,
    BasicDetail,
    getCallSupport,
    getChatSupport,
    getRequestMoney,
    postRequestMoney,
    getVendor,
    // UpsertgetPersonalDetails,
    LoginVendor,
    getBankDetail,
    getEducationalDetails,
    getVendorExperience,
    getVendorCompletedOrder,
    getVendorPricing,
    getVendorOtherDetails,
    getNewOrder,
    InsertAvailability,
    UpsertBankDetails,
    UpsertEducationalDetails,
    UpsertVendorExperience,
    VendorPSLDTL,
    VendorPhoneReg,
    VendorPhoneVerify,
    VendorEDDetails,
    VendorOFCDTL,
    VendorOtherDTL,
    VendorDocDTL,
    VendorExpDTL,
    VendorProfileUpload,
    VendorLogin,
    BankDetail,
    VendorRegister,
    ProfileUploader,
    StartLiveStramingApi,
    FaqTypePost,
    GetFAQType,
    DeleteFAQ,
    GetFAQName,
    FaqNamePost,
    DeleteFAQname,
    GetFAQ,
    FaqPost,
    DeleteFaq,
    Getbanner,
    GetExpertPortfolio,
    UpsertExpertPortfolio,
    UPSRTBanner, GetRechargePlan,
    UpsrtRechargePlan,
    UpsrtGiftPlan,
    GetGiftPlan,
    getSinglePersonalDetails,
    getSinglePersonalsDetails,
    getOtherDetails,
    UpsertOtherDetails,
    getOfficalsDetails,
    UpsertOfficalsDetails,

    getFrenchiser,
    
    getCustomerOrder,
    UpsertCallSupport
}