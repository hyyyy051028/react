#include<BookStystemManager.h>
char iuputWords[30];//��������
int main() {//ͼ�����ϵͳ������
	Node* head = (Node*)malloc(sizeof(Node));
	head->next = NULL;
	loadbook(head);	
	while (1) {
		show();
		char c = _getch();
		switch (c)
		{
	     case'1':
			//У��ͨ��
			income(head);
			break;
			
	     case'2':
			//�ο͵�¼
			 show2(head);
			 break;
	 
	    case'0':
		system("cls");
		printf("�ݰ�");
		exit(0);
		break;
		default:

			printf("�����������������\n");

			system("pause");
			system("cls");
		}
	}
	return 0;
}

//�û���
int income(Node* head) {//�û���¼����

	system("cls");

	while (1) {
		come();
		char t = getch();
		int ge;
		char admin[10], key[10];

		switch (t)
		{
			//�û���¼
		case '1':
			ge = finduser();
			if (ge == 1)
				welcome2(head);
				return 1;		
		
			break;
			//�û�ע��
		case '2':
			logname();			
			
			system("cls");
			break;
			//����Ա��¼

		case '3':
			logadmian(head);
			break;

		case '0':
		{
		system("cls");
		printf("�ݰ�");
		exit(0);
		break;			
		}
		default:

			printf("�����������������\n");

			system("pause");
			system("cls");

			
		}


	}
}
void logadmian(Node* head) {//����Ա��¼ϵͳ

	char admin[10], key[10];
	while (1) {
		printf("�������û���������:\n");
		printf("�û���:");
		gets_s(admin);
		input();
		strcpy(key, iuputWords);
		if (strcmp(admin, "666") == 0 && strcmp(key, "666") == 0) {//������Ա���ܶ�����Ϊ666
			system("cls");
			color(2);
			printf("������ȷ����ù���Ա\n");
			color(7);
			system("pause");
			system("cls");
			welcome1(head);

			break;
		}
		else {
			system("cls");
			color(4);
			printf("������û�����������������!!!\n");
			color(7);
			system("pause");
			system("cls");
			break;
		}
	}

}
void logname() {//�û�ע��ϵͳ
	printf("��ӭע���˺�\n");
	user a, b;
	FILE* fp,*fp1;
	fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "a+");
	if (fp1 == NULL) {//��ΪҪ��r+�������ļ������˺ţ�����Ҫ��֤�ļ��ǿ�
		//����ļ�Ϊ��ֱ��ע��ʡȥ�����˺�
		fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "w");
		printf("�������˺�:\n");
		scanf("%s", a.name);
		input();
		strcpy(a.log, iuputWords);
		fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "a");

		fwrite(&a, sizeof(user), 1, fp);

		printf("�˺�ע��ɹ���\n");
		fclose(fp);
		system("pause");

	}
	else
	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r+");
	printf("�������˺�:\n");
	scanf("%s", a.name);
	fread(&b, sizeof(user), 1, fp);
	//�������˺ţ������ļ���ѯ�Ƿ��д��˺�
	while (1)
	{
		if (strcmp(a.name, b.name)) {//һֱȡ�ļ��е�user�ȶ�֪��ȡ��
			if (!feof(fp)) {
				fread(&b, sizeof(user), 1, fp);
			}
			else {
				break;
			}
		}
		else {
			system("cls");
			color(4);
			printf("���û����Ѵ��ڣ�������ע�ᣡ\n");
			color(7);
			fclose(fp);
			system("pause");
			return;
		}
	}
	fclose(fp);

	//scanf("%s", a.log);
	input();
	strcpy(a.log, iuputWords);//����
	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "a");

	fwrite(&a, sizeof(user), 1, fp);

	printf("�˺�ע��ɹ���\n");
	fclose(fp);
	system("pause");
}
int  finduser() {//�û���¼ϵͳ

	user a, b;
	FILE* fp;

	printf("�������˺�:\n");
	scanf("%s", a.name);
	input();//���뺯��

	strcpy(a.log, iuputWords);

	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");

	fread(&b, sizeof(user), 1, fp);

	while (1) {
		//�Ȼ���˺ţ��ٱ����ļ��ҵ��ʺŶ�Ӧ������

		if ((strcmp(a.name, b.name) == 0)) {
			break;
		}
		else {
			if (!feof(fp)) {
				fread(&b, sizeof(user), 1, fp);
			}
			else {
				system("cls");
				color(4);
				printf("�˺Ż��������\n");
				color(7);
				fclose(fp);
				system("pause");
				system("cls");

				return 0;
			}
		}
	}
	fclose(fp);
	//����ҵ��˺Ž��������ļ��е����������������ȶ�
	if (strcmp((a.log), (b.log)) == 0) {
		system("cls");
		color(2);
		printf("��¼�ɹ�����ӭʹ��\n");
		color(7);
		system("pause");
		system("cls");
		return 1;
	}
	else {
		system("cls");
		color(4);
		printf("�˺Ż��������\n");
		color(7);
		system("pause");
		system("cls");
		return 0;
	}

}

void color(int c)//��ɫ����
{
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), c);

}
void input() {//���빦��ʵ��
	printf("����������:\n");

	for (int i = 0; i < 14; ) {
		iuputWords[i] = _getch();
		if (iuputWords[i] == '\r') {
			iuputWords[i] = '\0';
			break;
		}
		else if (iuputWords[i] == '\b' && i > 0) {
			i--;
			printf("\b \b");
		}
		else
		{
			i++;
			printf("*");
		}
	}

}
//����չ��
void show2(Node* head) {
	system("cls");
	while (1) {


		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*�����ʵ��ѧͼ�����ϵͳ*\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      ��ӭ����          *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      1.��ӡͼ����Ϣ    *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      2.ͳ��ͼ������    *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      3.��������ĸ����  *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
		printf("\t\t\t\t\t**************************\n");
		char c = _getch();
		switch (c)
		{
		case'1':
			printfbook(head);
			break;
		case'2':
			coutbook(head);
			break;
		case'3':
			sort3(head);
			break;
		case'0':
			//�˳�
			system("cls");
			printf("�ݰ�\n");
			system("pause");
			system("cls");
			return ;
			

		default:
			printf("����������\n");
		}
	}
}
void welcome1(Node* head) {
	while (1) {
		printf("\t\t\t\t\t*********************************\n");
		printf("\t\t\t\t\t* �����ʵ�ͼ�����ϵͳ(����Աҳ)*\n");
		printf("\t\t\t\t\t*********************************\n");
		printf("\t\t\t\t\t*        ѡ�����б�           *\n");
		printf("\t\t\t\t\t*********************************\n");
		printf("\t\t\t\t\t*        1.¼��ͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        2.��ӡͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        3.ͳ��ͼ������         *\n");
		printf("\t\t\t\t\t*        4.����ͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        5.�޸�ͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        6.ɾ��ͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        7.���Ĵ�������         *\n");
		printf("\t\t\t\t\t*        8.ͼ��ɸѡϵͳ         *\n");
		printf("\t\t\t\t\t*        9.ѧ���˺Ź���         *\n");
		printf("\t\t\t\t\t*        a.��������ĸ����       *\n");
		printf("\t\t\t\t\t*        0.�˳�ϵͳ             *\n");
		printf("\t\t\t\t\t*********************************\n");
		/*Node* head = (Node*)malloc(sizeof(Node));
		head->next = NULL;*/
		char c = _getch();
		switch (c)
		{
		case'1':
			inputbook(head);
			break;
		case'2':
			printfbook(head);
			break;
		case'3':
			coutbook(head);
			break;
		case'4':
			find(head);
			break;
		case'5':
			changebook(head);
			break;
		case'6':
			delshow(head);
			break;
		case'7':
			sort(head);
			break;
		case'8':
			shaixuan(head);
			break;
		case'9':
			adminpeo();
			break;
		case'a':
			sort3(head);
			break;
		case'0':
			//�˳�
			system("cls");
			printf("�ݰ�\n");
			return;

		default:
			color(4);
			printf("����������\n");
			color(7);
			system("pause");
			system("cls");
		}
	}
}
void welcome2(Node* head) {
	while (1) {
		printf("\t\t\t\t\t*********************************\n");
		printf("\t\t\t\t\t*      �����ʵ�ͼ�����ϵͳ     *\n");
		printf("\t\t\t\t\t*********************************\n");
		printf("\t\t\t\t\t*        ѡ�����б�           *\n");
		printf("\t\t\t\t\t*********************************\n");		
		printf("\t\t\t\t\t*        1.��ӡͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        2.ͳ��ͼ������         *\n");
		printf("\t\t\t\t\t*        3.����ͼ����Ϣ         *\n");
		printf("\t\t\t\t\t*        4.�������а�           *\n");
		printf("\t\t\t\t\t*        5.ͼ��ɸѡϵͳ         *\n");
		printf("\t\t\t\t\t*        6.��������ĸ����       *\n");
		printf("\t\t\t\t\t*        0.�˳�ϵͳ             *\n");
		printf("\t\t\t\t\t*********************************\n");
		/*Node* head = (Node*)malloc(sizeof(Node));
		head->next = NULL;*/
		char b = _getch();
		switch (b)
		{
		case'1':
			printfbook(head);
			break;
		case'2':
			coutbook(head);
			break;
		case'3':
			find(head);
			break;
		case'4':
			sort(head);
			break;
		case'5':
			shaixuan(head);
			break;
		case'6':
			sort3(head);
			break;
		case'0':
			//�˳�
			system("cls");
			printf("�ݰ�\n");
			return;

		default:
			color(4);
			printf("����������\n");
			color(7);
			system("pause");
			system("cls");
		}
	}
}
void come()//�û���¼����
{
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      �û���¼ϵͳ      *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      1.�û���¼        *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      2.�û�ע��        *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      3.����Ա��¼      *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
	printf("\t\t\t\t\t**************************\n");
}
void show() {//�ο�ʦ��ѡ��ͨ��
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*�����ʵ��ѧͼ�����ϵͳ*\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      1.ʦ��ͨ��        *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      2.�ο�ģʽ        *\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
	printf("\t\t\t\t\t**************************\n");
}
//ͼ�����ϵͳ������
void inputbook(Node* head) {
	//β�巨������
	Node* fresh = (Node*)malloc(sizeof(Node));
	fresh->next = NULL;
	printf("������ͼ�����ţ����ƣ����Ĵ�����");
	scanf("%d%s%d",&fresh->book.number,fresh->book.name,&fresh->book.times);
	Node* move = head;
	while (move->next != NULL) {
		move = move->next;
	}
	move->next = fresh;
	savebook(head);
	color(2);
	printf("������\n");
	color(7);
	system("pause");
	system("cls");	
}
void printfbook(Node* head) {
	//�����α�����������
	Node* move = head->next;
	printf("���    ����                      ���Ĵ���    \n");
	while (move != NULL) {
	
	printf("��ţ�%d ���ƣ�%-20s���Ĵ���: %d\n", move->book.number, move->book.name,move->book.times);
		move = move->next;
	}
	system("pause");
	system("cls");
}


void coutbook(Node* head) {
	//�����α��������������
	int cout = 0;
	Node* move = head->next;
	while (move != NULL) {
		cout++;
		move = move->next;

	}
	color(2);
	printf("ͼ������Ϊ��%d\n", cout);
	color(7);
	system("pause");
	system("cls");

}

void find(Node* head) {
	//ͼ�����ϵͳ
	system("cls");
	while (1) {
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      ͼ�����ϵͳ      *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*    ��ѡ�����Ĳ��ҷ�ʽ  *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      1.����Ų���      *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      2.�����Ʋ���      *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      3.��ϲ���      *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
		printf("\t\t\t\t\t**************************\n");
		char c = _getch();
		switch (c)
		{
		case'1'://����Ų���
			numfind(head);
			break;
		case'2'://����������
			namefind(head);
			break;
		case'3':
			zuhe(head);
		case'0':
			//�˳�
			system("cls");			
			return;

		default:
			color(4);
			printf("����������\n");
			color(7);
			break;
		}
	}
}

void numfind(Node* head){//����Ų���
	printf("������Ҫ���ҵ�ͼ�����ţ�");
	int booknum;
	scanf_s("%d", &booknum);
	Node* move = head->next;
	//�����α������������ȡ���������һ�ȶ�
	while (move != NULL) {
		if (booknum == move->book.number) {
			color(2);
			printf("�ҵ���ͼ��\n");
			color(7);
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move->book.number, move->book.name, move->book.times);
			system("pause");
			system("cls");
			return;
		}
		move = move->next;
	}
	color(4);
	printf("δ�ҵ�ͼ����Ϣ\n");
	color(7);
	system("pause");
	system("cls");
}

void namefind(Node* head) {//����������
	printf("������Ҫ���ҵ�ͼ������ƣ�");
	char booknum[15];
	gets_s(booknum);
	Node* move = head->next;
	while (move != NULL) {
		if (!(strcmp(booknum, move->book.name))) {
			
			color(2);
			printf("�ҵ���ͼ��\n");
			color(7);
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move->book.number, move->book.name, move->book.times);
			system("pause");
			system("cls");
			return;
		}
		move = move->next;
	}
	color(4);
	printf("δ�ҵ�ͼ����Ϣ\n");
	color(7);
	system("pause");
	system("cls");
}

void  savebook(Node* head) {//����ͼ�麯��
	FILE* file = fopen("./book.info", "w");
	//���ļ���������ھʹ���
	if (file == NULL) {
		color(4);		
		printf("���ļ�ʧ��\n");		
		color(7);
		return;
	}
	Node* move = head->next;
	while (move != NULL) {
		if (fwrite(&move->book, sizeof(Book), 1, file) != 1) {
			color(4);
			printf("����%s���ִ���\n", move->book.name);
			color(7);
		}
		move = move->next;

	}
	fclose(file);
}
void zuhe(Node* head) {
	printf("������Ҫ���ҵ�ͼ������ƣ�");
	char booknumE[15];
	gets_s(booknumE);
	printf("������Ҫ���ҵ�ͼ�����ţ�");
	int booknum;
	scanf_s("%d", &booknum);
	Node* move = head->next;
	while (move != NULL) {
		if ((booknum == move->book.number)&&!(strcmp(booknumE, move->book.name))) {

			color(2);
			printf("�ҵ���ͼ��\n");
			color(7);
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move->book.number, move->book.name, move->book.times);
			system("pause");
			system("cls");
			return;
		}
		move = move->next;
	}
	color(4);
	printf("δ�ҵ�ͼ����Ϣ\n");
	color(7);
	system("pause");
	system("cls");
}

void loadbook(Node* head) {//����ͼ�麯��
	FILE* file = fopen("./book.info", "r");
	if (!file) {
		color(2);			
		printf("û��ͼ���ļ���������ȡ\n");
		color(7);
		return;
	}
	Node* fresh =(Node*) malloc(sizeof(Node));
	fresh->next = NULL;
	Node* move = head;
	while (fread(&fresh->book, sizeof(Book), 1, file) == 1) {
		move->next = fresh;
		move = fresh;
		fresh =(Node*) malloc(sizeof(Book));
		fresh->next = NULL;
	}
	free(fresh);
	fclose(file);
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t*");
	color(2);		
	printf("       ��ȡ�ɹ�         ");
	color(7);
	printf("*\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\n");
}

void changebook(Node* head) {//�޸ĺ���
	//�ȱ����ҵ�Ҫ�޸ĵĽ�����޸�
	printf("������Ҫ�޸ĵ�ͼ����\n");
	int booknum;
	scanf("%d", &booknum);
	Node* move = head->next;
	while (move != NULL) {
		if (move->book.number == booknum) {
			printf("����Ҫ�޸ĵ�ͼ���Ǳ��Ϊ%2d��%-8s      ���Ĵ���Ϊ%4d\n", move->book.number, move->book.name,move->book.times);		
			printf("������ͼ�����ƣ����Ĵ���\n");
			scanf("%s%s%d", move->book.name,&move->book.times);
			savebook(head);
			printf("�޸ĳɹ�\n");
			printfbook(head);
			system("pause");
			system("cls");
			return;

		}		
		move = move->next;
	}
	printf("û���ҵ�ͼ����Ϣ\n");
		system("pause");
		system("cls");
}

void delshow(Node* head) {//ɾ��ϵͳ
	system("cls");
	while (1) {
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      ͼ��ɾ��ϵͳ      *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      1.�����ɾ��        *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      2.������ɾ��        *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
		printf("\t\t\t\t\t**************************\n");
		char c = _getch();
		switch (c)
		{
		case'1':
			numdel(head);
			break;
		case'2':
			namedel(head);
			break;
		case'0':
			//�˳�
			system("cls");
			printf("�ݰ�\n");
			return;

		default:
			color(4);
			printf("����������\n");
			color(7);
			system("pause");
			system("cls");
		}
	}
}

void numdel(Node* head) {//�����ɾ��
	printf("������Ҫɾ����ͼ����\n");
	int booknum = 0;
	scanf("%d", &booknum);
	Node* move = head;
	while (move->next != NULL) {
		if (move->next->book.number == booknum) {
			Node* tmp = move->next;
			move->next = move->next->next;
			system("cls");
			color(2);
			printf("�Ѿ��ҵ���ͼ��ȷ��ɾ����\n");
			color(7);
			printf("\t\t\t\t\t**************************\n");
			printf("\t\t\t\t\t*     1.ȷ��ɾ��         *\n");
			printf("\t\t\t\t\t*     2.ȡ��ɾ��         *\n");			
			printf("\t\t\t\t\t**************************\n");
			while (1) {
				char c = _getch();
				switch (c)
				{					
				case'1':
					free(tmp);
					tmp = NULL;
					savebook(head);
					printf("ɾ���ɹ�\n");
					printfbook(head);
					system("pause");
					system("cls");
					return;					
				case'2':
					color(2);
					printf("ȡ��ɾ���ɹ�\n");
					color(7);
					system("pause");
					system("cls");
					return;
				default:
					color(4);
					printf("����������\n");
					color(7);
					system("pause");
					system("cls");
					break;
				}
			}					
		}
		move = move->next;
	}
	printf("û���ҵ�ͼ����Ϣ\n");
	system("pause");
	system("cls");
}

void namedel(Node* head) {//������ɾ��

	printf("������Ҫɾ����ͼ������\n");
	char booknum[15];
	gets_s(booknum);
	Node* move = head;
	while (move->next != NULL) {
		if (!(strcmp(move->next->book.name, booknum))) {
			Node* tmp = move->next;
			move->next = move->next->next;
			system("cls");
			color(2);
			printf("�Ѿ��ҵ���ͼ��ȷ��ɾ����\n");
			color(7);
			printf("\t\t\t\t\t**************************\n");
			printf("\t\t\t\t\t*     1.ȷ��ɾ��         *\n");
			printf("\t\t\t\t\t*     2.ȡ��ɾ��         *\n");
			printf("\t\t\t\t\t**************************\n");
			while (1) {
				char c = _getch();
				switch (c)
				{
				case'1':
					free(tmp);
					tmp = NULL;
					savebook(head);
					printf("ɾ���ɹ�\n");
					printfbook(head);
					system("pause");
					system("cls");
					return;
				case'2':
					color(2);
					printf("ȡ��ɾ���ɹ�\n");
					color(7);
					system("pause");
					system("cls");
					return;
				default:
					color(4);
					printf("����������\n");
					color(7);
					system("pause");
					system("cls");
					break;
				}
			}
		}
		move = move->next;
	}
	color(4);
	printf("û���ҵ�ͼ����Ϣ\n");
	color(7);
	system("pause");	
	system("cls");
}

void sort(Node* head) {//������'
	printf("��������\n");
	for (Node* turn = head->next; turn->next != NULL; turn = turn->next) {
		for (Node* move = head->next; move->next != NULL; move = move->next) {
			if (move->book.times < move->next->book.times) {
				Book temp = move->book;
				move->book = move->next->book;
				move->next->book = temp;
			}

		}
	}
	Node* move = head->next;
	printf("���    ����                      ���Ĵ���    \n");
	while (move != NULL) {

		printf("��ţ�%d ���ƣ�%-8s           ���Ĵ���: %d\n", move->book.number, move->book.name, move->book.times);
		move = move->next;
	}
	sort2(head);
}
void sort2(Node* head) {//������
	printf("��������Ϊ\n");
	for (Node* turn = head->next; turn->next != NULL; turn = turn->next) {
		for (Node* move = head->next; move->next != NULL; move = move->next) {
			if (move->book.times > move->next->book.times) {
				Book temp = move->book;
				move->book = move->next->book;
				move->next->book = temp;
			}

		}
	}
	printfbook(head);
}
void shaixuan(Node* head) {//ɸѡϵͳ
	system("cls");
	while (1) {
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*    ��ӭ����ɸѡϵͳ    *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      1.��Χɸѡ        *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      2.��Ӣ��ɸѡ        *\n");
		printf("\t\t\t\t\t**************************\n");
		printf("\t\t\t\t\t*      0.�˳�ϵͳ        *\n");
		printf("\t\t\t\t\t**************************\n");


		char t  = _getch();
		switch (t)
		{
		case'1':
			fanwei(head);
			break;
		case'2':
			zongying(head);
			break;
		case'0':
			//�˳�
			system("cls");
			printf("�ݰ�\n");
			return;

		default:
			color(4);
			printf("����������\n");
			color(7);
			system("pause");
			system("cls");
		}
	}
}
void fanwei(Node* head) {//����Χɸѡ
	
	int a ,b;
	int cout = 0;
	Node* move = head->next;
	printf("�����뷶Χ");
	scanf("%d %d" ,&a,&b);				
	while (move != NULL) {
		if (fanwei(move->book.times,a,b)==1) {
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move->book.number, move->book.name, move->book.times);
			cout++;
		}
		move = move->next;
	}
	color(2);
	printf("ɸѡ��Ϲ���%d��ͼ���������\n",cout);
	color(7);
	system("pause");
	system("cls");

}
void zongying(Node* head) {//��Ӣ����ɸѡ
	printf("��Ӣɸѡ��ʼ\n");
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t********Ӣ����Ŀ¼********\n");
	int cout2 = 0;
	Node* move = head->next;
	while (move != NULL) {
		if (judge(move->book.name[0]) == 1) {
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move->book.number, move->book.name, move->book.times);
			cout2++;
		}
		move = move->next;
	}
	printf("\t\t\t\t\t**************************\n");
	color(2);
	printf("\t\t\t\t\tɸѡ��Ϲ���%d��ͼ��ΪӢ����\n", cout2);
	color(7);
	printf("\t\t\t\t\t**************************\n");
	printf("\n");
	int cout = 0;
	Node* move1 = head->next;
	while (move1 != NULL) {
		cout++;
		move1 = move1->next;
	}

	Node* move2 = head->next;
	printf("\t\t\t\t\t**************************\n");
	printf("\t\t\t\t\t********������Ŀ¼********\n");
	while (move2 != NULL) {
		if (!judge((move2->book.name[0]))) {
			printf("��ţ�%d ���ƣ� %s ���Ĵ�����%d\n", move2->book.number, move2->book.name, move2->book.times);

		}
		move2 = move2->next;
	} 
	int c = cout - cout2;
	printf("\t\t\t\t\t**************************\n");
	color(2);
	printf("\t\t\t\t\tɸѡ��Ϲ���%d��ͼ��Ϊ������\n", c);
	color(7);
	printf("\t\t\t\t\t**************************\n");
	system("pause");
	system("cls");
}

int judge(char a) {
	if (a >= 'a' && a <= 'z' || a > 'A' && a < 'Z') {
		return 1;
	}
	else
		return 0;
}
int fanwei(int a, int b, int c) {
	if (a <= c && a > b) {
		return 1;
	}
	else 
		return 0;
}
void adminpeo() {//����Ա����
	system("cls");
	while (1)
	{
		printf("\t**************************\n");
		printf("\t*     ѧ���˺Ź���ϵͳ   *\n");
		printf("\t**************************\n");
		printf("\t*    1.��ʾ��Ա��Ϣ      *\n");
		printf("\t**************************\n");
		printf("\t*    2.ɾ��ѧ����Ϣ      *\n");
		printf("\t**************************\n");
		printf("\t*    0.�˳�ϵͳ          *\n");
		printf("\t**************************\n");

		FILE* fp, * fp1, * fp3;
		user a, b;
		int flag = 1;
		char t = getch();

switch (t) {

		case '2': {
			system("cls");

			printadmin();
			printf("������Ҫɾ����ѧ���˺�");
			char c[10];
			scanf("%s", c);
			fp3 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");

			fread(&b, sizeof(user), 1, fp3);

			while (1) {

				if ((strcmp(c, b.name) == 0)) {
					break;
				}
				else {
					if (!feof(fp3)) {
						fread(&b, sizeof(user), 1, fp3);
					}
					else {
						system("cls");
						color(4);
						color(7);
						fclose(fp3);
						flag = 0;
					}
				}
			}
			if (flag == 0) {
				printf("��ѧ��������\n");
			}
			else {
				fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r+");

				fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\linshi.txt", "w+");
				while (fread(&b, sizeof(user), 1, fp) == 1)
				{

					if (strcmp(b.name, c) != 0)//����Ҫɾ��������
					{
						fwrite(&b, sizeof(user), 1, fp1);

					}
				}
				fclose(fp);
				fclose(fp1);
				fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\linshi.txt", "r");

				fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "w+");//ˢ�� �û� �ļ�

				while (fread(&a, sizeof(user), 1, fp1) == 1)
				{
					fwrite(&a, sizeof(user), 1, fp);
				}

				fclose(fp);
				fclose(fp1);
				color(2);
				printf("ɾ���ɹ�������\n");
				color(7);
				break;
			}
		}
		
		
		case '1': {
			printadmin();
			break;
		}		
		case '0':
			system("cls");
			return;
		default:
			color(4);
			printf("�����������������");
			color(7);
			system("pause");
			system("cls");
		}
	}

}
void deladmin() {
	FILE* fp, * fp1, * fp3;
	user a, b;
	/*FILE* fp, * ft;
	user b;
	FILE* fp1;
	int flag = 1;
	char set[20];
	int index = 0;
	printadmin();
	printf("������Ҫɾ����ѧ����");
	scanf("%s", set);
	fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");

	fread(&b, sizeof(user), 1, fp1);

	while (1) {

		if ((strcmp(set, b.name) == 0)) {
			break;
		}
		else {
			if (!feof(fp1)) {
				fread(&b, sizeof(user), 1, fp1);
			}
			else {
				fclose(fp1);
				flag = 0;
				break;
			}
		}
	}
	fclose(fp1);


	if (flag == 1) {
		char key[20];
		fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");
		ft = fopen("d:\\temp.txt", "a+");
		if (fp == NULL || ft == NULL) {
			printf("����\n");
			return;
		}
		while (fread(key, sizeof(key), 1, fp)) {
			if (strcmp(key, set) != 0) {
				fwrite(key, sizeof(key), 1, ft);
				index++;
			}
			else {
				rewind(fp);
				fseek(fp, sizeof(key) * (index + 2), 0);
			}

		}
		fclose(fp);
		fclose(ft);
		remove("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt");
		rename("d:\\temp.txt", "C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt");
		color(2);
		printf("ѧ���˺���Ϣɾ���ɹ���\n");
		color(7);
		printadmin();
		system("cls");
	}
	else
		system("cls");
	color(4);
	printf("û�и�ѧ��\n");
	color(7);
	system("pause");
	system("cls");*/
	fp3 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");

	int num = 1;
	system("cls");
	printf("��Ա��Ϣ����:\n");
	printf("\t�û��� \t����\n");

	while (fread(&b, sizeof(user), 1, fp3) == 1)
	{

		printf("\t%d %s \t%s\n", num, b.name, b.log);
		num++;
	}
	rewind(fp3);
	fclose(fp3);
	char c[10];
	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r+");

	fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\linshi.txt", "w+");

	scanf("%s", c);

	while (fread(&b, sizeof(user), 1, fp) == 1)
	{

		if (strcmp(b.name, c) != 0)//����Ҫɾ��������
		{
			fwrite(&b, sizeof(user), 1, fp1);

		}
	}
	fclose(fp);
	fclose(fp1);
	fp1 = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\linshi.txt", "r");

	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "w+");//ˢ�� �û� �ļ�

	while (fread(&a, sizeof(user), 1, fp1) == 1)
	{
		fwrite(&a, sizeof(user), 1, fp);
	}

	fclose(fp);
	fclose(fp1);
	color(2);
	printf("ɾ���ɹ�������\n");
	color(7);
}
void printadmin() {
	FILE* fp;
	user  b;
	fp = fopen("C:\\Users\\21673\\source\\repos\\ͼ�����ϵͳ\\name.txt", "r");
	int num = 1;

	system("cls");

	printf("��Ա��Ϣ����:\n");

	printf("\t�û���        \t����\n");
	while (fread(&b, sizeof(user), 1, fp) == 1)
	{

		printf("\t%d %-10s \t%s\n", num, b.name, b.log);
		num++;
	}
		fclose(fp);

		system("pause");
		system("cls");
	}
void sort3(Node* head) {//������
	for (Node* turn = head->next; turn->next != NULL; turn = turn->next) {
		for (Node* move = head->next; move->next != NULL; move = move->next) {
			if (strcmp(move->book.name,move->next->book.name)>0) {
				Book temp = move->book;
				move->book = move->next->book;
				move->next->book = temp;
			}

		}
	}
	printfbook(head);
}




	
