
        let data = [
            {principal: 2500, time: 1.8 },
            {principal: 1000, time: 5 },
            {principal: 3000, time: 1 },
            {principal: 2000, time: 3 }
            ]
    
        function interestCalculator(data) 
        {
            data.forEach(function (item) 
            {
                let rate
    
                if (item.principal >= 2500 && item.time > 1 && item.time < 3) 
                {
                    rate = 3
                }
                else if (item.principal >= 2500 && item.time >= 3) 
                { 
                    rate = 4
                }
                else if (item.principal < 2500 || item.time <= 1) 
                {
                    rate = 2
                }
                else 
                {
                    rate = 1
                }
    
                let interest = (item.principal * item.time * rate) / 100;

                item.rate = rate

                item.interest = interest
            })
    
    
            let interestData = data
                    
            console.log(interestData)
    
            return interestData
        }
    
    
        interestCalculator(data)
