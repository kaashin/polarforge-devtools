export function kPreprocess(): {
    name: string;
    markup: ({ content, filename }: {
        content: any;
        filename: any;
    }) => {
        code: string;
    };
    script: (data: any) => void;
};
