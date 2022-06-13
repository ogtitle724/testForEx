const cit = ['서울','세종','대전','부산','울산','대구','광주','제주']
const cit_eng = ['seoul','sejong','daejeon','busan','ulsan','daegu','gwangju','jeju']
const len_cit = cit.length
let Data = new Array();


for (let i = 0; i<len_cit;i++){
    
        $(function() {
            
            parseName = 'https://raw.githubusercontent.com/ogtitle724/testForEx/main/data/data_'+cit[i]+'%20맛집.csv';
            $.ajax({
                url:parseName,
                dataType:'text',
                success: function(data) {
                    var allRow = data;
                    var row = allRow.split(/\r?\n|\r/).slice(1)
                    let len_row = row.length
                    for (let k = 0; k<len_row;k++){
                        let inst = []
                        let slic_para = row[k].split(',').length - 2
                        let instant = row[k].split(',').slice(-2)
                        let title = row[k].split(',').slice(1,slic_para).join(' ')

                        inst.push(title)
                        inst.push(instant[0])
                        inst.push(instant[1])

                        row[k] = inst
                    }
                    Data[i] = row
                }
            });
        
    });
}

