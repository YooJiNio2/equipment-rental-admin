import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function AdminUserDetailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>회원가입 승인 상세</Text>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.content}>
        {/* 이름 정보 */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>사용자 이름</Text>
          <Text style={styles.value}>김학생 (ID: 127)</Text>
        </View>

        {/* 학번 정보 */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>학번 (Student ID)</Text>
          <Text style={styles.value}>2022211756</Text>
        </View>

        {/* 학생증 사본 확인 */}
        <Text style={styles.label}>학생증 사본 확인</Text>
        <View style={styles.imagePlaceholder}>
          {/* 실제 이미지가 들어갈 자리 */}
          <Text style={styles.imageText}>600 × 400</Text>
        </View>

        {/* 하단 버튼 */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={[styles.btn, styles.rejectBtn]}>
            <Text style={styles.rejectBtnText}>반려하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.approveBtn]}>
            <Text style={styles.approveBtnText}>가입 승인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  backText: { fontSize: 24, color: '#333' },
  content: { padding: 25 },
  infoBox: { backgroundColor: '#F8F9FA', padding: 20, borderRadius: 12, marginBottom: 20 },
  label: { fontSize: 14, color: '#666', marginBottom: 8 },
  value: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  imagePlaceholder: { width: '100%', height: 200, backgroundColor: '#DDD', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginVertical: 20, borderStyle: 'dashed', borderWidth: 2, borderColor: '#BBB' },
  imageText: { color: '#888', fontSize: 20, fontWeight: 'bold' },
  footerButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  btn: { flex: 0.48, padding: 18, borderRadius: 12, alignItems: 'center' },
  rejectBtn: { backgroundColor: '#FFEBEB' },
  approveBtn: { backgroundColor: '#2E5BFF' },
  rejectBtnText: { color: '#FF4D4D', fontWeight: 'bold' },
  approveBtnText: { color: 'white', fontWeight: 'bold' },
});