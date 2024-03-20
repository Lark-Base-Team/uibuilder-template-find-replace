
export default async function main(uiBuilder: any) {
    uiBuilder.form((form: any) => ({
        formItems: [
            form.tableSelect('tableId', { label: '选择数据表' }),
            form.fieldSelect('fieldId', { label: '选择字段', sourceTable: 'tableId', mode: 'multiple' }),
            form.input('findText', { label: '输入查找的文本' }),
            form.input('replaceText', { label: '替换为' }),
        ],
        buttons: ['确认'],
    }), async ({ values }: any) => {
        const { tableId, fieldId, findText, replaceText } = values;
        // 省略查找的代码
        uiBuilder.text(`查找到 n 条记录`);
        uiBuilder.buttons('是否替换', ['确定'], () => {
            // 省略替换的代码
        });
    });
}